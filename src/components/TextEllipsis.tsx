import React, { useMemo } from 'react'

interface TextEllipsisProp {
    children: string
    tailLength: number
    title?: string
    className?: string
}

const TextEllipsis = ({
    children,
    tailLength,
    title,
    className,
}: TextEllipsisProp) => {
    const start = useMemo(
        () => children.substring(0, children.length - tailLength),
        [children, tailLength]
    )
    const tail = useMemo(
        () => children.substring(children.length - tailLength, children.length),
        [children, tailLength]
    )
    return (
        <div className={className} title={title} style={{ display: 'flex' }}>
            <span
                style={{
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                }}
            >
                {start}
            </span>
            <span>{tail}</span>
        </div>
    )
}

export default TextEllipsis
