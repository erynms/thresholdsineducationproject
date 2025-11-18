# Assets Directory

This directory contains static assets for the website.

## Structure

- `images/` - Images, logos, photos, diagrams
- Add other subdirectories as needed (e.g., `pdfs/`, `downloads/`)

## Usage

### Adding Images to Pages

In your HTML files, reference images using:

```html
<!-- For pages in root directory (index.html, about.html, etc.) -->
<img src="assets/images/your-image.jpg" alt="Description of image">

<!-- For pages in subdirectories (articles/, themes/) -->
<img src="../assets/images/your-image.jpg" alt="Description of image">
```

### Supported Formats

- Images: .jpg, .png, .gif, .svg, .webp
- Documents: .pdf
- Other assets as needed

## File Naming

Use lowercase with hyphens:
- ✅ `thresholds-cover.jpg`
- ✅ `author-photo.png`
- ❌ `Thresholds Cover.jpg`
- ❌ `author_photo.PNG`
