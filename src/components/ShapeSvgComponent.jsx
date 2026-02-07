import React from "react";

/**
 * SVG Component - Paste your SVG code and use it with dynamic fill colors
 * 
 * Usage Example:
 * 
 * <ShapeSvgComponent fillColor="#ff7a00">
 *   <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
 *     <path d="M12 2L2 7L2 17L12 22L22 17L22 7L12 2Z" fill="black"/>
 *   </svg>
 * </ShapeSvgComponent>
 * 
 * The fillColor prop will replace all fill attributes in the SVG paths
 */
export default function ShapeSvgComponent({
  children,
  fillColor,
  strokeColor,
  width,
  height,
  className = "",
  style = {},
  ...props
}) {
  const processSVG = (element) => {
    if (!React.isValidElement(element)) {
      return element;
    }

    // If it's an SVG element, process it
    if (element.type === "svg") {
      const newProps = {
        ...element.props,
        className: className || element.props.className,
        style: { ...element.props.style, ...style },
        ...(width && { width }),
        ...(height && { height }),
        ...props,
      };

      // Process children (paths, circles, etc.)
      const processedChildren = React.Children.map(
        element.props.children,
        (child) => processSVG(child)
      );

      return React.cloneElement(element, newProps, processedChildren);
    }

    // If it's a path or shape element, update fill/stroke
    if (
      typeof element.type === "string" &&
      (element.type === "path" ||
        element.type === "circle" ||
        element.type === "rect" ||
        element.type === "polygon" ||
        element.type === "ellipse" ||
        element.type === "line")
    ) {
      const newProps = { ...element.props };

      // Replace fill color if fillColor is provided and element has a fill
      if (fillColor && newProps.fill && newProps.fill !== "none") {
        newProps.fill = fillColor;
      }

      // Replace stroke color if strokeColor is provided
      if (strokeColor && newProps.stroke) {
        newProps.stroke = strokeColor;
      }

      return React.cloneElement(element, newProps);
    }

    // For other elements, recursively process children
    if (element.props && element.props.children) {
      const processedChildren = React.Children.map(
        element.props.children,
        (child) => processSVG(child)
      );
      return React.cloneElement(element, {}, processedChildren);
    }

    return element;
  };

  return <>{React.Children.map(children, (child) => processSVG(child))}</>;
}
