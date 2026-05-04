## Data modeling and normalization

```
└── src/
    ├── data/
    │   ├── source/
    │   │   ├── lotData.ts
    │   │   ├── neighborhoodData.ts
    │   │   └── worldData.ts
    │   ├── lots.ts
    │   ├── neighborhoods.ts
    │   └── worlds.ts
    └── types/
        ├── lot.ts
        ├── neighborhood.ts
        └── world.ts
```

The API currently uses static source files as its data source. Since the data is maintained manually, the source structure is optimized for readability and editing rather than for direct API consumption.

The source data follows a hierarchical format:

```txt
world → neighborhood → lots
```

This structure avoids repeating relational fields such as `worldId` and `neighborhoodId` in every lot entry. Instead, these relationships are inferred from the position of each item in the source object and are added during the mapping step.

### Source data vs API DTOs

The project separates source data from API response DTOs:

- **Source data** is authoring-friendly and may omit fields that do not apply to a given entity.
- **DTOs** are API-friendly and provide a stable response shape.
- Fields that do not apply to a specific case are returned as `null` in the DTO.

For example, community and special lots do not have transaction types in the source data, but the API response still includes a `transaction` object with `null` values where appropriate.

- source: field does not apply → omitted / not allowed by type
- DTO: field does not apply → present with null

### Normalization flow

Each entity goes through a normalization step before being exposed by the API:

```txt
source data → validation → DTO mapping → indexed references
```

For `worlds` and `neighborhoods`, the mapper creates summary indexes such as:

```txt
worldSummaryById
neighborhoodSummaryById
```

These indexes are used to enrich child entities with relational metadata. For example, lots receive their `world` and `neighborhood` references during mapping, instead of storing that information manually in each source entry.

### Stable reference lists

The project also derives stable reference lists from the mapped data, such as:

```txt
WORLD_IDS
NEIGHBORHOOD_IDS
```

These are used as the source of truth for deciding which entities are officially known by the API. Data found in lower-level source files is only mapped if its parent world or neighborhood exists in the normalized references.

This helps prevent orphaned or invalid data from being exposed.

### Lot mapping

Lots are the most complex entity and are modeled as a discriminated union:

```txt
residential | community | special
```

Each category has different source rules:

- **Residential lots** can have availability, owners, transaction types, rent details and buy details.
- **Community lots** are not listed for transactions, but may expose in-game/pre-game value data.
- **Special lots** are unavailable and do not expose transaction data.

During mapping, all lot types are converted into a stable `LotDTO` shape. The mapper also:

- validates required identifiers;
- skips invalid or duplicated lot IDs;
- enriches lots with world and neighborhood references;
- converts unavailable source values into `null`;
- calculates `main_price`, prioritizing rent price over buy price when both exist;
- returns stable `building_details` and `transaction` objects for every lot.

This keeps the source data easy to maintain manually while keeping the API response predictable for frontend consumption.
