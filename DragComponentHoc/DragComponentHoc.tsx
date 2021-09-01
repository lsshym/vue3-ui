import * as React from 'react'
import { useRef, useEffect } from 'react'
import './DragComponentHoc.scss'
export interface DragComponentHocProps {
    canDrag?: Boolean // 激活拖拽逻辑
    className?: any
}
export interface DragComponentHocState {
    DrapDom?: any
}

const DragComponentHoc = (WrappedComponent, assignClassName = null) => {
    const addDragFun = (root, canDragDom) => {
        canDragDom.onmousedown = function(event) {
            const { left, top } = root.getBoundingClientRect()
            let shiftX = event.clientX - left
            let shiftY = event.clientY - top
            const mouseMoveEvt = evt => {
                const { pageX, pageY } = evt
                root.style.left = pageX - shiftX + 'px'
                root.style.top = pageY - shiftY + 'px'
            }
            document.removeEventListener('mousemove', mouseMoveEvt)
            document.addEventListener('mousemove', mouseMoveEvt)
            root.onmouseup = function() {
                document.removeEventListener('mousemove', mouseMoveEvt)
            }
        }
    }
    return props => {
        const { canDrag, className, extraStyle, ...passed } = props
        const dragDom = useRef(null)

        useEffect(() => {
            if (passed.hasOwnProperty('visible') && passed.visible === false) return
            if (!canDrag) return
            setTimeout(() => {
                const hocRootArr = document.getElementsByClassName(className || 'drag-component')
                if (!hocRootArr.length) return
                dragDom.current = hocRootArr[0]
                if (assignClassName) {
                    dragDom.current = hocRootArr[0].getElementsByClassName(assignClassName)[0]
                }
                addDragFun(hocRootArr[0], dragDom.current)
            }, 0)
        }, [passed?.visible])

        return (
            <WrappedComponent
                className={`${className || ''} drag-component`}
                style={{
                    ...extraStyle,
                }}
                {...passed}
            ></WrappedComponent>
        )
    }
}

export default DragComponentHoc
