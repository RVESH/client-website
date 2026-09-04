// ============================================================================
// GALLERY
// Pulls image entries from the centralized image registry and exposes the
// category list used for filtering.
// ============================================================================

import { images } from './images'

export const galleryCategories = ['All', 'Ceremony', 'Reception', 'Details', 'Portraits']

export const galleryItems = images.gallery
