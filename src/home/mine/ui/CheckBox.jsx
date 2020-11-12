import React, { useState, useCallback } from 'react';

import { List, Checkbox,Flex } from 'antd-mobile';

const AgreeItem = Checkbox.AgreeItem;

const CheckBox = (props) => {
    const [check,setcheck] = useState(true);


    const handleClick = useCallback(() => {
        return () => {
           setcheck(!check)

        }
    })

    

    return (
        <List>
                <Flex>
        <Flex.Item>
          <AgreeItem 
            onChange={props.handleCheckBox.bind(this, {check})}
            onClick={handleClick()}
            >
              已阅读并同意 <a>《用户服务协议》</a>
          </AgreeItem>
        </Flex.Item>
      </Flex>
                
            </List>
    )
}


export default CheckBox;
