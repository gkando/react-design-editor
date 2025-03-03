import React from 'react';
import { Form } from 'antd';

import ChartModal from '../../common/ChartModal';

export default {
    render(canvasRef, form, data) {
        const { getFieldDecorator } = form;
        if (!data) {
            return null;
        }
        return (
            <Form.Item>
                {
                    getFieldDecorator('chartOption', {
                        rules: [{
                            required: true,
                            message: 'Please input code',
                        }],
                        initialValue: JSON.stringify(data.chartOption, null, '\t'),
                    })(
                        <ChartModal form={form} />,
                    )
                }
            </Form.Item>
        );
    },
};
