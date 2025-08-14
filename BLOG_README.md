# Blog Functionality Implementation

This document describes the blog functionality that has been implemented for the AscentiQ AI website.

## Features Implemented

### 1. Blog Listing Page (`/blogs`)
- Displays all published blogs in a responsive grid layout
- Pagination support with configurable items per page
- Blog cards showing:
  - Featured image
  - Publication date
  - Author name
  - Title
  - Excerpt
  - Tags (up to 3 displayed)
  - "Featured" badge for featured posts
- Responsive design (1 column on mobile, 2 on tablet, 3 on desktop)
- Loading states and error handling

### 2. Blog Detail Page (`/blog/:slug`)
- Individual blog post view with dynamic routing
- Hero section with blog image as background
- Social media sharing buttons (Facebook, Twitter, LinkedIn)
- Author information display
- Tags display
- SEO meta tags for social sharing
- Responsive design
- Error handling for non-existent blogs

### 3. API Integration
- **Base URL**: `https://blogplatform-backend-ascentiq.vercel.app/`
- **Endpoints Used**:
  - `GET /api/blogs/published` - Get all published blogs with pagination
  - `GET /api/blogs/slug/:slug` - Get blog by slug

### 4. Technologies Used
- **TanStack Query (React Query)** for data fetching and caching
- **Axios** for HTTP requests
- **React Router** for navigation
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **React Helmet** for SEO

## File Structure

```
src/
├── services/
│   └── blogApi.js          # API service for blog endpoints
├── pages/
│   ├── Blogs.jsx           # Blog listing page
│   └── BlogDetail.jsx      # Individual blog page
├── components/
│   └── BlogCard.jsx        # Reusable blog card component
└── constant.js             # Updated with blog routes
```

## API Response Structure

The blog API returns data in the following format:

```json
{
  "success": true,
  "blogs": [
    {
      "_id": "689d94bea1b1a405ce8129d0",
      "title": "test blog",
      "slug": "test-blog",
      "authorId": {
        "_id": "689d94a3a1b1a405ce8129c6",
        "name": "Admin"
      },
      "categoryId": {
        "_id": "689d94aba1b1a405ce8129cb",
        "name": "Tech",
        "slug": "tech"
      },
      "tags": ["test", "new"],
      "excerpt": "test",
      "imageAlt": "test",
      "isFeatured": false,
      "author": {
        "_id": "689d9476a1b1a405ce8129ac",
        "name": "Admin"
      },
      "metaDescription": "",
      "metaKeywords": [],
      "imageUrl": "https://res.cloudinary.com/dhyaf1hvx/image/upload/v1755157693/blog_images/hkju4bm9oqseqadei662.jpg",
      "status": "published",
      "publishDate": "2025-08-14T00:00:00.000Z",
      "createdAt": "2025-08-14T07:48:14.175Z",
      "updatedAt": "2025-08-14T07:48:16.176Z"
    }
  ],
  "totalCount": 1,
  "currentPage": 1,
  "totalPages": null
}
```

## Navigation

The blog functionality has been integrated into the main navigation:
- Added "Blogs" link to the main navigation menu
- Accessible via `/blogs` route
- Individual blog posts accessible via `/blog/:slug` route

## Styling

The blog pages use the existing design system:
- Consistent with the main website's color scheme
- Responsive design using Tailwind CSS
- Smooth transitions and hover effects
- Modern card-based layout

## SEO Features

- Dynamic meta tags for each blog post
- Open Graph tags for social media sharing
- Twitter Card support
- Proper heading hierarchy
- Alt text for images

## Performance Optimizations

- TanStack Query caching (5 minutes stale time)
- Lazy loading of blog pages
- Optimized images with proper sizing
- Efficient pagination

## Future Enhancements

Potential improvements that could be added:
1. Blog search functionality
2. Category filtering
3. Related posts
4. Comment system
5. Reading time estimation
6. Blog post content rendering (currently shows excerpt only)
7. RSS feed
8. Newsletter subscription

## Usage

1. Navigate to `/blogs` to see all published blogs
2. Click on any blog card to view the full post
3. Use pagination to browse through multiple pages
4. Share posts using the social media buttons
5. Navigate back to the blog list using the "Back to Blogs" button

## Dependencies Added

- `@tanstack/react-query`: For data fetching and caching
- `axios`: For HTTP requests
- `@tailwindcss/line-clamp`: For text truncation in blog cards
