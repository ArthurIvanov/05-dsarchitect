import styled from "styled-components";
import { Icon } from "../icon";

type TAppearance = "primary" | "secondary" | "onDark" | "onLight" | "inverted";
type TSize = "base" | "small";

interface IButtonProps {
	appearance?: TAppearance;
	size: TSize;
	// @todo make a loading prop
	loading?: boolean;
	disabled?: boolean;
	iconBefore?: string;
	iconAfter?: string;
	text?: string;
}

const StyledButton = styled.button<IButtonProps>`
    border 1px solid;
    border-radius: none;
    display: inline-flex;
    justinfy-content: center;
    align-items: center;
    cursor: pointer;
    box-shadow: none;
    transition: 0.2s ease;
    padding: unset;
    gap: ${(props) => props.theme.spacing.inner.close};

   

    ${(props) =>
		props.size === "base" &&
		`
        font-size: ${props.theme.typography.fontSize.component.base};
        line-height: ${props.theme.typography.lineHeight.component.base};
        font-weight: ${props.theme.typography.fontWeight.medium};

        height: ${props.theme.spacing.height.base};
        padding: 0 ${props.theme.spacing.padding.relaxed};
        `}

        ${(props) =>
			props.size === "small" &&
			`
        font-size: ${props.theme.typography.fontSize.component.small};
        line-height: ${props.theme.typography.lineHeight.component.small};
        font-weight: ${props.theme.typography.fontWeight.medium};
 

        height: ${props.theme.spacing.height.small};
        padding: 0 ${props.theme.spacing.padding.default};
        `}


    ${(props) =>
		props.appearance === "primary" &&
		`
            &:enabled {
            background-color: ${props.theme.colors.bg.lead.loud.enabled};
            border-color: ${props.theme.colors.border.lead.loud.enabled};
            color: ${props.theme.colors.text.inverted};
            }

            &:hover {
            background-color: ${props.theme.colors.bg.lead.loud.hover};
            border-color: ${props.theme.colors.border.lead.loud.hover};
            color: ${props.theme.colors.text.inverted};
            }

            &:active {
            background-color: ${props.theme.colors.bg.lead.loud.active};
            border-color: ${props.theme.colors.border.lead.loud.active};
            color: ${props.theme.colors.text.inverted};
        }
        `}

         ${(props) =>
				props.appearance === "secondary" &&
				`
            &:enabled {
            background-color: ${props.theme.colors.bg.neutral.section.calm};
            border-color: ${props.theme.colors.border.lead.loud.enabled};
            color: ${props.theme.colors.link.loud.enabled};
            }

            &:hover {
            background-color: ${props.theme.colors.bg.neutral.section.calm};
            border-color: ${props.theme.colors.border.lead.loud.hover};
            color: ${props.theme.colors.link.loud.hover};
            }

            &:active {
            background-color: ${props.theme.colors.bg.neutral.section.calm};
            border-color: ${props.theme.colors.border.lead.loud.active};
            color: ${props.theme.colors.link.onDark.active};
        }
        `}

        ${(props) =>
			props.appearance === "onLight" &&
			`
            &:enabled {
            background-color: transparent;
            border-color: ${props.theme.colors.border.lead.onLight.enabled};
            color: ${props.theme.colors.link.onLight.enabled};
            }

            &:hover {
            background-color: transparent;
            border-color: ${props.theme.colors.border.lead.onLight.hover};
            color: ${props.theme.colors.link.onLight.hover};
            }

            &:active {
            background-color: transparent;
            border-color: ${props.theme.colors.border.lead.onLight.active};
            color: ${props.theme.colors.link.onLight.active};
        }
        `}

         ${(props) =>
				props.appearance === "onDark" &&
				`
            &:enabled {
            background-color: transparent;
            border-color: ${props.theme.colors.border.lead.onDark.enabled};
            color: ${props.theme.colors.link.onDark.enabled};
            }

            &:hover {
            background-color: transparent;
            border-color: ${props.theme.colors.border.lead.onDark.hover};
            color: ${props.theme.colors.link.onDark.hover};
            }

            &:active {
            background-color: transparent;
            border-color: ${props.theme.colors.border.lead.onDark.active};
            color: ${props.theme.colors.link.onDark.active};
        }
        `}

        ${(props) =>
			props.appearance === "inverted" &&
			`
            &:enabled {
            background-color: transparent;
            border-color: ${props.theme.colors.border.lead.inverted.enabled};
            color: ${props.theme.colors.link.inverted.enabled};
            }

            &:hover {
            background-color: transparent;
            border-color: ${props.theme.colors.border.lead.inverted.hover};
            color: ${props.theme.colors.link.inverted.hover};
            }

            &:active {
            background-color: transparent;
            border-color: ${props.theme.colors.border.lead.inverted.active};
            color: ${props.theme.colors.link.inverted.active};
        }
        `}

        ${(props) =>
			props.disabled &&
			`
            &:disabled {
                background-color: ${props.theme.colors.bg.disabled};
                border-color: ${props.theme.colors.border.disabled};
                color: ${props.theme.colors.text.disabled};  
                cursor: not-allowed;
            }

            `}


`;

export const Button: React.FC<IButtonProps> = ({
	size = "base",
	appearance = "primary",
	disabled,
	text = "Primary button",
	iconBefore,
	iconAfter,
}) => {
	return (
		<StyledButton disabled={disabled} appearance={appearance} size={size}>
			{iconBefore && (
				<Icon size={size === "base" ? 20 : 16} iconName={iconBefore} />
			)}
			{text}
			{iconAfter && (
				<Icon size={size === "base" ? 20 : 16} iconName={iconAfter} />
			)}
		</StyledButton>
	);
};
