import { Modal } from 'antd'
import React from 'react'
import TestDrag from '../CustomDrag/DragLayer'
import DragComponentHoc from './DragComponentHoc'

export interface TestDragModalProps {}

export interface TestDragModalState {
    visible: Boolean
}
const DragModal = DragComponentHoc(Modal,'ant-modal-header')

class TestDragModal extends React.Component<TestDragModalProps, TestDragModalState> {
    constructor(props: TestDragModalProps) {
        super(props)
        this.state = {
            visible: true,
        }
    }
    render() {
        return (
            <DragModal title="服了" canDrag={true} visible={this.state.visible}>
                <TestDrag></TestDrag>
            </DragModal>
        )
    }
}

export default TestDragModal
