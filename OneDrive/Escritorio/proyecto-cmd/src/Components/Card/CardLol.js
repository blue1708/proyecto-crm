import React from 'react'
import { Card, ProgressBar } from '@tremor/react';

export const CardLol = () => {
    return (
    <div>
            <Card className="mx-auto max-w-xs" decoration="top" decorationColor="yellow">
                <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">Lol</p>
                <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">$14,743</p>
                <ProgressBar color='yellow' value={72} />
            </Card>
    </div>
    )
}
