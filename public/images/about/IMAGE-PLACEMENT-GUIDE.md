# About Page - Image Placement Guide

## Directory Structure
All images for the about page should be placed in: `public/images/about/`

---

## 📁 Section 1: Hero Slideshow
**Location:** `public/images/about/hero/`

Place 5 hero slideshow images with the following names:
- `slide-1.jpg` or `slide-1.png`
- `slide-2.jpg` or `slide-2.png`
- `slide-3.jpg` or `slide-3.png`
- `slide-4.jpg` or `slide-4.png`
- `slide-5.jpg` or `slide-5.png`

**Recommended Size:** 1920x1080px (Full HD landscape)
**Format:** JPG or PNG
**Note:** These are the main hero images that will rotate in the slideshow

---

## 📁 Section 3: Our Works (Latest Projects)
**Location:** `public/images/about/projects/`

Place 4 project card images with the following names:
- `project-1.jpg` or `project-1.png`
- `project-2.jpg` or `project-2.png`
- `project-3.jpg` or `project-3.png`
- `project-4.jpg` or `project-4.png`

**Recommended Size:** 800x600px (4:3 aspect ratio)
**Format:** JPG or PNG
**Note:** These showcase your latest project work

---

## 📁 Section 4: About Tabs Background Images
**Location:** `public/images/about/`

Place 3 tab background images with the following names:
- `history-bg.png` - Our History tab background
- `quality-bg.png` - Our Quality tab background
- `experience-bg.png` - Experience tab background

**Recommended Size:** 1200x800px (3:2 aspect ratio)
**Format:** PNG (or JPG)
**Note:** These backgrounds appear on the left side of the About tabs section and change when clicking different tabs

---

## 📁 Section 5: Our Clients (Company Logos)
**Location:** `public/images/about/clients/`

Place **exactly 11 client logos** with these specific names:

1. `aramco.png` or `aramco.jpg` - Saudi Aramco logo
2. `ibnzahr.png` or `ibnzahr.jpg` - Ibn Zahr logo
3. `kaust.png` or `kaust.jpg` - KAUST logo
4. `royal-commission.png` or `royal-commission.jpg` - Royal Commission logo
5. `ccc.png` or `ccc.jpg` - China Communications Construction Company logo
6. `satrop.png` or `satrop.jpg` - SATROP Refinery logo
7. `sino.png` or `sino.jpg` - Sinohydro logo
8. `sabic.png` or `sabic.jpg` - SABIC logo
9. `linde.png` or `linde.jpg` - Linde logo
10. `hec.png` or `hec.jpg` - China Harbour Engineering Company logo
11. `baytur.png` or `baytur.jpg` - Baytur logo

**Recommended Size:** 300x150px (2:1 aspect ratio) - logos will auto-scale
**Format:** PNG or JPG (PNG with transparent background preferred for better quality)
**Note:** Make sure logo names match exactly as listed above. The system will automatically detect whether you use .png or .jpg extension.

---

## 📁 Section 5: Clients Quote Background Image
**Location:** `public/images/about/backgrounds/`

Place 1 background image:
- `city-skyline.png`

**Recommended Size:** 1920x1080px
**Format:** PNG (or JPG)
**Note:** This appears behind the quote text on the right side of the clients section

---

## 📁 Section 7: CTA Background
**Location:** `public/images/about/backgrounds/`

Place 1 background image:
- `cta-background.png` or `cta-background.jpg`

**Recommended Size:** 1920x1080px
**Format:** JPG or PNG
**Note:** Background for "Ready to Transform Your Business?" section

---

## Summary of Required Images

### Total Images Needed: 27 images

1. **Hero Slideshow:** 5 images (slide-1 through slide-5)
2. **Projects:** 4 images (project-1 through project-4)
3. **About Tabs Backgrounds:** 3 images (history-bg, quality-bg, experience-bg)
4. **Client Logos:** 11 images (aramco, ibnzahr, kaust, etc.)
5. **Backgrounds:** 2 images (city-skyline, cta-background)
6. **Total:** 5 + 4 + 3 + 11 + 2 = 25 images

---

## Image Optimization Tips

1. **Compress images** before uploading to improve page load speed
2. **Use JPG** for photos and backgrounds
3. **Use PNG** for logos (especially with transparency)
4. **Recommended max file size:** 500KB per image
5. **Hero images** can be slightly larger (up to 1MB) but compress when possible

---

## Need to Update Image Paths?

All image paths are configured in these files:
- Hero: `app/components/about/Section1-HeroSlideshow.jsx`
- Projects: `app/components/about/Section3-OurWorks.jsx`
- Clients: `app/components/about/Section5-Clients.jsx` (updated to 11 clients)
- Backgrounds: `app/components/about/Section5-Clients.jsx` and `Section7-CTA.jsx`
