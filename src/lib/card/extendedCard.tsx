import styled from "styled-components";
import { ButtonLink } from "../button";
import { Badge } from "../badge";

interface IExtendedCardProps {
	textSize?: "base" | "large";
	text?: string;
	newsData?: string;
	badgeText?: string;
	buttonText?: string;
	children?: React.ReactNode;
	contentRight?: React.ReactNode;
}

const StyledExtendedCard = styled.div<IExtendedCardProps>`
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

	.card-content-right {
		display: inline-flex;
		flex-direction: row;
		align-items: center;
		gap: ${(props) => props.theme.spacing.inner.related};
	}
`;

export const ExtendedCard: React.FC<IExtendedCardProps> = ({
	children,
	text,
	newsData = "8.03.2025",
	textSize = "base",
	badgeText,
	buttonText = "Go to",
	contentRight,
}) => {
	return (
		<StyledExtendedCard textSize={textSize}>
			<div className="card-content">
				<div className="card-header">
					<span className="card-news-data">{newsData}</span>
					{badgeText ? <Badge size="small" text={badgeText} /> : null}
					{contentRight ? (
						<div className="card-content-right">{contentRight}</div>
					) : null}
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
		</StyledExtendedCard>
	);
};
