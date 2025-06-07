// Loading priorities for different asset types
export const LOADING_PRIORITIES = {
  CRITICAL: "high" as const,
  IMPORTANT: "medium" as const,
  LAZY: "low" as const,
} as const;

// Asset type priorities
export const ASSET_PRIORITIES = {
  // Critical assets (above the fold)
  logo: LOADING_PRIORITIES.CRITICAL,
  profilePicture: LOADING_PRIORITIES.CRITICAL,
  heroImages: LOADING_PRIORITIES.CRITICAL,

  // Important assets (visible soon)
  projectThumbnails: LOADING_PRIORITIES.IMPORTANT,
  serviceImages: LOADING_PRIORITIES.IMPORTANT,
  companyLogos: LOADING_PRIORITIES.IMPORTANT,

  // Lazy assets (below the fold)
  showcaseImages: LOADING_PRIORITIES.LAZY,
  testimonialImages: LOADING_PRIORITIES.LAZY,
  blogImages: LOADING_PRIORITIES.LAZY,
  videos: LOADING_PRIORITIES.LAZY,
} as const;

// Intersection Observer thresholds
export const INTERSECTION_THRESHOLDS = {
  [LOADING_PRIORITIES.CRITICAL]: 0.0, // Load immediately
  [LOADING_PRIORITIES.IMPORTANT]: 0.1, // Load when 10% visible
  [LOADING_PRIORITIES.LAZY]: 0.25, // Load when 25% visible
} as const;

// Root margins for different priorities
export const ROOT_MARGINS = {
  [LOADING_PRIORITIES.CRITICAL]: "0px", // No margin, load immediately
  [LOADING_PRIORITIES.IMPORTANT]: "100px", // Load 100px before entering viewport
  [LOADING_PRIORITIES.LAZY]: "50px", // Load 50px before entering viewport
} as const;

// Loading animation durations
export const ANIMATION_DURATIONS = {
  skeleton: 1.5, // Skeleton shimmer duration
  fadeIn: 0.4, // Content fade in duration
  stagger: 0.1, // Stagger delay between items
  blur: 0.6, // Blur to sharp transition
  progress: 0.3, // Progress bar animation
} as const;

// Image quality settings based on priority
export const IMAGE_QUALITY = {
  [LOADING_PRIORITIES.CRITICAL]: 85, // High quality for critical images
  [LOADING_PRIORITIES.IMPORTANT]: 75, // Medium quality for important images
  [LOADING_PRIORITIES.LAZY]: 65, // Lower quality for lazy images
} as const;

// Loading delay configurations
export const LOADING_DELAYS = {
  [LOADING_PRIORITIES.CRITICAL]: 0, // No delay
  [LOADING_PRIORITIES.IMPORTANT]: 50, // 50ms delay
  [LOADING_PRIORITIES.LAZY]: 100, // 100ms delay
} as const;

// Skeleton dimensions for common image sizes
export const SKELETON_DIMENSIONS = {
  logo: { width: 40, height: 40 },
  avatar: { width: 64, height: 64 },
  thumbnail: { width: 250, height: 250 },
  showcase: { width: 1000, height: 600 },
  profile: { width: 500, height: 500 },
} as const;

// Video loading configuration
export const VIDEO_CONFIG = {
  preload: "metadata" as const,
  loadingTimeout: 5000, // 5 seconds timeout
  bufferThreshold: 0.3, // Start playing when 30% buffered
} as const;

// Error retry configuration
export const ERROR_CONFIG = {
  maxRetries: 3,
  retryDelay: 1000, // 1 second
  backoffMultiplier: 2,
} as const;
