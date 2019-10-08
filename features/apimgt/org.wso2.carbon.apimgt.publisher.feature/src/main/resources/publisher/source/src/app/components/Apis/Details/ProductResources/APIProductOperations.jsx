/*
 * Copyright (c) 2019, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { FormattedMessage } from 'react-intl';
import EditIcon from '@material-ui/icons/Edit';
import { useAPI } from 'AppComponents/Apis/Details/components/ApiContext';
import Box from '@material-ui/core/Box';

import Resources from 'AppComponents/Apis/Details/Resources/Resources';

/**
 *
 *
 * @export
 * @param {*} props
 * @returns
 */
export default function APIProductOperations() {
    const [api] = useAPI();
    return (
        <Grid container spacing={3}>
            <Grid item md={12}>
                <Typography variant='h4' gutterBottom>
                    Product Resources
                    <Box component='div' display='inline'>
                        <Link to={'/api-products/' + api.id + '/resources/edit'}>
                            <Button size='small'>
                                <EditIcon />
                                <FormattedMessage
                                    id='Apis.Details.Resources.Resources.edit.resources.button'
                                    defaultMessage='Edit Resources'
                                />
                            </Button>
                        </Link>
                    </Box>
                </Typography>
            </Grid>
            <Grid item md={12}>
                <Resources
                    hideAPIDefinitionLink
                    operationProps={{
                        disableUpdate: true,
                        disableDelete: true,
                    }}
                    disableMultiSelect
                    disableAddOperation
                />
            </Grid>
        </Grid>
    );
}
