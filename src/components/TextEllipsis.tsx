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
        <div style={{ margin: '0 10px' }} className={className}>
            <span
                className="searchable"
                style={{
                    position: 'absolute',
                    display: 'block',
                    pointerEvents: 'none',
                    color: 'rgba(0,0,0,0)',
                    maxWidth: '90%',
                    overflow: 'hidden',
                }}
            >
                {children}
            </span>
            <span
                title={title}
                style={{
                    display: 'inline-flex',
                    maxWidth: '100%',
                }}
            >
                <span
                    style={{
                        textOverflow: 'ellipsis',
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                    }}
                    className={'start'}
                >
                    {start}
                </span>
                <span className={'tail'}>{tail}</span>
            </span>
        </div>
    )
}

export default TextEllipsis
