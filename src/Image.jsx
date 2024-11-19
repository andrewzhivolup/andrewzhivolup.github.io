import {
  EyeOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
} from "@ant-design/icons";
import { Image, Space } from "antd";
import React from "react";

function _Image({ src, className }) {
  return (
    <div className={className}>
      <Image
        src={src}
        className={className}
        preview={{
          mask: (
            <div style={{ fontSize: 24, color: "white" }}>
              <EyeOutlined />
              {" Предпросмотр"}
            </div>
          ),
        }}
      />
    </div>
  );
}
function ImageGroup({ children }) {
  return (
    <Image.PreviewGroup
      preview={{
        toolbarRender: (
          _,
          { transform: { scale }, actions: { onZoomOut, onZoomIn } }
        ) => (
          <div
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.3)",
              padding: "15px 30px",
              borderRadius: "30px",
              color: "white",
            }}
          >
            <Space size={12} className="toolbar-wrapper">
              <ZoomOutOutlined
                style={{ fontSize: "30px" }}
                disabled={scale === 1}
                onClick={onZoomOut}
              />
              <ZoomInOutlined
                style={{ fontSize: "30px" }}
                disabled={scale === 50}
                onClick={onZoomIn}
              />
            </Space>
          </div>
        ),
      }}
    >
      {children}
    </Image.PreviewGroup>
  );
}

export { _Image, ImageGroup };
