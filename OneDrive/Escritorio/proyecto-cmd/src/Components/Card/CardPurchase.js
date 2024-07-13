import React from 'react'
import { Card, ProgressBar } from '@tremor/react';

export const CardPurchase = () => {
    return (
    <div>
            <Card className="mx-auto max-w-xs" decoration="top" decorationColor="red">
                <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">Purchase</p>
                <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">$59,812</p>
                <ProgressBar  color='red' value={72} />
            </Card>
    </div>
    )
}
