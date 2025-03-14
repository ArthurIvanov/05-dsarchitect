import styled from "styled-components";
import { FC, ButtonHTMLAttributes } from "react";
import { Icon, iconsType } from "../icon";

/**
 * Pick meaning for Button, primary, inverted
 */
type TAppearance = "primary" | "inverted";

export interface IButtonLinkProps
	extends ButtonHTMLAttributes<HTMLButtonElement> {
	/**
	 * Icon before | Иконка до текста
	 */
	iconBefore?: iconsType;

	/**
	 * Icon after | Иконка после текста
	 */
	iconAfter?: iconsType;

	/**
	 * Which appearance Button should have | Как должна выглядить кнопка
	 */
	appearance?: TAppearance;

	/**
	 * Make button disabled | Делает кнопку неактивной
	 *
	 */
	disabled?: boolean;

	/**
	 * Button text | Текст кнопки
	 */
	text?: string;

	/**
	 * Shows that current operation is in progress | Указывает что текущая оберация в процессе
	 */
	loading?: boolean;

	/**
	 * Allow apply custom classes to component
	 */
	className?: string;
}

export const StyledButtonLink = styled.button<IButtonLinkProps>`
	border: none;
	font-family: ${(props) => props.theme.typography.fontFamily.text};
	font-size: ${(props) => props.theme.typography.fontSize.component.base};
	line-height: ${(props) => props.theme.typography.lineHeight.component.base};
	font-weight: ${(props) => props.theme.typography.fontWeight.medium};
	gap: ${(props) => props.theme.spacing.inner.close};
	background: unset;
	display: inline-flex;
	flex-direction: row;
	align-items: center;
	align-content: center;
	justify-content: center;
	box-shadow: none;
	cursor: pointer;
	transition: 0.2s ease;

	&:focus {
		box-shadow: 0px 0px 0px 2px rgba(79, 96, 255, 0.25);
	}

	${(props) =>
		props.appearance === "primary" &&
		`  
        &:enabled {
            color: ${props.theme.colors.link.loud.enabled};
        }
        
        &:hover {   
            color: ${props.theme.colors.link.loud.hover};  
        }
        
        &:focus {
            color: ${props.theme.colors.link.loud.enabled};  
        }

        &:active {
            color: ${props.theme.colors.link.loud.active};    
        }
    `}

	${(props) =>
		props.appearance === "inverted" &&
		`  
        &:enabled {
            background-color: unset;
            color: ${props.theme.colors.link.calm.enabled};
        }
        
        &:hover {               
            color: ${props.theme.colors.link.calm.hover}; 
        }
        
        &:focus {              
            color: ${props.theme.colors.link.calm.enabled};  
        }

        &:active {  
            color: ${props.theme.colors.link.calm.active};
        }
    `}


    ${(props) =>
		props.disabled &&
		`  
        &:disabled {
            color: ${props.theme.colors.text.disabled}; 
            background-color: ${props.theme.colors.bg.disabled};  
            border-color: ${props.theme.colors.bg.disabled}; 
            cursor: not-allowed;    
        }
    `}
`;

/**
 *
 * Link button appearance, has only two views "primary" and "inverted" |
 * Внешний вид кнопки ссылки, имеет только два вида "primary" and "inverted"
 */

export const ButtonLink: FC<IButtonLinkProps> = ({
	appearance,
	disabled,
	text,
	iconBefore,
	iconAfter,
	type = "button",
	...props
}) => {
	return (
		<StyledButtonLink
			appearance={appearance}
			disabled={disabled}
			type={type}
			{...props}
		>
			{iconBefore ? <Icon iconName={iconBefore} size={20} /> : null}
			{text}
			{iconAfter ? <Icon iconName={iconAfter} size={20} /> : null}
		</StyledButtonLink>
	);
};
