const IMAGE_HEIGHT = 120;
const CELL_HEIGHT = 180;
const MARGIN = 16;
const RADIUS = 8;

export const shadowStyle = {
    elevation: 2,
    shadowColor: "#ccc",
    shadowOffset: {
        width: 0,
        height: 0,
    },
    shadowRadius: RADIUS,
    shadowOpacity: 0.4,
};

export const FEED_CONFIG = {
    CELL_HEIGHT,
    IMAGE_HEIGHT,
    MARGIN,
    RADIUS,
} as const;
