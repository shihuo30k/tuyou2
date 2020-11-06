import React from 'react';

import { List, Checkbox} from 'antd-mobile';

const CheckboxItem = Checkbox.CheckboxItem;

const CheckBox = () => {
    return (
        <List>
                <CheckboxItem>
                已阅读并同意
                    <span>《用户服务协议》</span>
                </CheckboxItem>
                
            </List>
    )
}


export default CheckBox;
