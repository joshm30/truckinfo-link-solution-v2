# To Do
[ ] add dynamic button for the review section it will be a larger button

# TruckInfo Link Solution v2

A dynamic link management system for truck insurance information websites, designed to handle multiple insurance providers and track user interactions through Google Analytics.

## Overview

This project manages insurance company links and tracking data for different insurance types (hot-shot, commercial, etc.) across various website positions and tables. The system allows for easy management of insurance provider links with built-in analytics tracking.

## Project Structure

```
truckinfo-link-solution-v2/
├── links/
│   └── links-mixed.js      # Main link data configuration
├── README.md               # This file
└── ...                     # Other project files
```

## How It Works

### Link Data Structure

Each link entry in the system contains:

- **Key**: Unique identifier for the link (e.g., `hot-shot-hartford-table-position-1`)
- **ID**: CSS ID for styling and targeting
- **Href**: The actual URL destination
- **DataGATrack**: Google Analytics tracking parameters

### Usage Example

To use a link in your HTML, add the `data-insurance-link` attribute with the corresponding key:

```html
<a data-insurance-link="hot-shot-hartford-table-position-1" class="button w-button">
  Get Quote
</a>
```

### Link Naming Convention

Links follow a consistent naming pattern:
- `{insurance-type}-{company}-{table}-{position}-{location}`

Examples:
- `hot-shot-hartford-table-position-1` (top table, first position)
- `hot-shot-hartford-table-bottom-position-1` (bottom table, first position)

## Insurance Types Supported

- **Hot Shot Insurance**: Specialized insurance for hot shot trucking operations
- Additional types can be added following the same pattern

## Insurance Companies

Currently supported providers:
- Hartford
- BiBerk (OOIDA)
- Progressive

## Analytics Tracking

The system automatically tracks user interactions with:
- Button clicks
- Table interactions
- Company-specific tracking
- Position-based analytics

## Adding New Links

To add new insurance providers or link positions:

1. Add a new entry to the `LINK_DATA` array in `links-mixed.js`
2. Follow the naming convention for the `Key` field
3. Set appropriate tracking parameters in `DataGATrack`
4. Update your HTML to use the new link key

Example new entry:
```javascript
{
  "Key": "hot-shot-newcompany-table-position-4",
  "ID": "AI-newcompany-table",
  "Href": "/angle-insurance-quote-hot-shot?kw=company-table-newcompany",
  "DataGATrack": "button-click,table,newcompany"
}
```

## Development

This project is designed to be easily maintainable and scalable. The centralized link management system allows for:

- Quick updates to insurance provider information
- Consistent tracking across all insurance-related links
- Easy addition of new insurance types or companies
- Maintainable analytics implementation

## Browser Compatibility

- Modern browsers with ES6+ support
- Requires JavaScript enabled for link functionality

## License

[Add your license information here]

## Contributing

[Add contribution guidelines here]

## Support

[Add support contact information here] 