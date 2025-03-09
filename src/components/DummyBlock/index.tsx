import SpriteIcon from "@components/SpriteIcon";
import { SpriteIconsIds } from "@utils/constants";
import "./style.css";

export interface IDummyBlockProps {
    message?: string;
}

const DummyBlock = ({ message }: IDummyBlockProps) => {
    return (
        <div className="dummy-block">
            <div className="dummy-block-content">
                <div className="icon-container">
                    <SpriteIcon
                        width="115px"
                        height="115px"
                        iconId={SpriteIconsIds.LOGO_DUMMY}
                    />
                </div>
                <p className="dummy-text">{message}</p>
            </div>
        </div>
    );
};

export default DummyBlock;
