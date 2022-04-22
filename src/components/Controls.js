import './Controls.css';

import { Button } from "antd";
import { CaretRightFilled, PauseOutlined, StepBackwardFilled, StepForwardFilled } from "@ant-design/icons";

function Controls(props) {
    return (
        <div className="controls">
            <Button
                type="primary"
                shape="circle"
                icon={<StepBackwardFilled />}
                onClick={() => props.changeSong(false)}
            />
            <Button
                type="primary"
                shape="circle"
                icon={props.isPaused ? <CaretRightFilled /> : <PauseOutlined />}
                onClick={() => props.setIsPaused(!props.isPaused)}/>
            <Button
                type="primary"
                shape="circle"
                icon={<StepForwardFilled />}
                onClick={() => props.changeSong(true)}/>
        </div>
    );
}

export default Controls;