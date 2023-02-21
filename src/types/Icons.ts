export interface IconWithHeightWidth {
	height: string | number;
	width: string | number;
	size?: never;
}

export interface IconWithSize {
	size: string | number;
	height?: never;
	width?: never;
}

export type IconProps = IconWithHeightWidth | IconWithSize;