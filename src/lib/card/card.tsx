import styled from "styled-components";
import { ButtonLink } from "../button";
import { Badge } from "../badge";

interface ICardProps {
	/**
	 * Меняет размер шрифта
	 */
	textSize?: "base" | "large";
	/**
	 * Основной текст карточки
	 */
	text?: string;

	/**
	 * Дата новости, может быть календарной или отметкой сегодня
	 */
	newsData?: string;

	/**
	 * Классификатор новости
	 */
	badgeText?: string;

	/**
	 * Текст кнопки
	 */
	buttonText?: string;

	/**
	 * Позволяет создавать сложную композицию внутри
	 */
	children?: React.ReactNode;
}

const StyledCard = styled.div<ICardProps>`
	background: ${(props) => props.theme.colors.bg.neutral.section.calm};
	color: ${(props) => props.theme.colors.text.main};
	border: 1px solid ${(props) => props.theme.colors.border.grey.calm.enabled};
	padding: ${(props) => props.theme.spacing.padding.default};
	min-width: 320px;
	max-width: 560px;
	display: inline-flex;
	flex-direction: column;
	align-items: start;

	gap: ${(props) => props.theme.spacing.inner.grouped};

	.card-content {
		display: flex;
		width: 100%;
		flex-direction: inherit;
		gap: inherit;
	}

	.card-header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;

		.card-news-data {
			font-size: ${(props) =>
				props.theme.typography.fontSize.component.base};
			line-height: ${(props) =>
				props.theme.typography.lineHeight.component.base};
			font-weight: ${(props) => props.theme.typography.fontWeight.medium};
		}
	}

	.card-body-text {
		${(props) =>
			props.textSize === "base" &&
			`
            font-size: ${props.theme.typography.fontSize.text.base};
			line-height: ${props.theme.typography.lineHeight.text.base};
			font-weight: ${props.theme.typography.fontWeight.medium};

        `}

		${(props) =>
			props.textSize === "large" &&
			`
            font-size: ${props.theme.typography.fontSize.heading.h4};
			line-height: ${props.theme.typography.lineHeight.heading.h4};
			font-weight: ${props.theme.typography.fontWeight.semiBold};

        `}
	}
`;

/**
 *
 * Используется для отображения новостей
 *
 */
export const Card: React.FC<ICardProps> = ({
	children,
	text = "Hello news",
	newsData = "8.03.2025",
	textSize = "base",
	badgeText = "News",
	buttonText = "Go to",
}) => {
	return (
		<StyledCard textSize={textSize}>
			<div className="card-content">
				<div className="card-header">
					<span className="card-news-data">{newsData}</span>
					<Badge size="small" text={badgeText} />
				</div>
				<div className="card-body">
					<span className="card-body-text">{text}</span>
					{children}
				</div>
			</div>
			<ButtonLink
				appearance="primary"
				text={buttonText}
				iconAfter="chevronRight"
			/>
		</StyledCard>
	);
};
