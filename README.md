# Super Napkin Official Website

## Tech Stack

- **Frontend**: SvelteKit v2, Svelte v5
- **API Integration**: PocketBase Javascript SDK
- **Backend**: PocketBase
- **Styling**: TailwindCSS v4
- **Hosting**: Vercel/Netlify

https://svelte.dev/docs/kit/advanced-routing#Advanced-layouts-(group)

## Development

### Prerequisites

- Node.js (see `package.json#engines`)
- pnpm
- PocketBase server

### Environment Variables

Create `.env`:

- `VITE_POCKETBASE` - PocketBase base URL (e.g. `http://127.0.0.1:8090`)

### Commands

- `pnpm dev` - start dev server
- `pnpm lint` - prettier + eslint
- `pnpm check` - svelte-check
- `pnpm build` - production build
