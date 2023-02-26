import React, { useMemo } from 'react'

interface TextEllipsisProp {
    children: string
    tailLength: number
    title?: string
    className?: string
}


// TODO:
// -Now copying add /n between two spans values;
// -search works, but looks bad;

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
        <div
            className={`${className} searchable`}
            title={title}
            style={{ display: 'flex' }}
            data-search-target={children}
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
            <div
                className="searchable"
                style={{
                    width: '100%',
                    opacity: '0',
                    overflow: 'hidden',
                    display: 'inline-block',
                    position: 'absolute',
                    color: 'transparent',
                    bottom: 0,
                    zIndex: -1,
                    left: 0,
                }}
            >
                {children}
            </div>
        </div>
    )
}

export default TextEllipsis
