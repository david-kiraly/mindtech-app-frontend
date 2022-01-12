import React from 'react';

export interface ISingleDayCovidData {
    id: number;
    infected: number;
    activeInfected: number;
    deceased: number;
    recovered: number;
    quarantined: number;
    tested: number;
    lastUpdatedAtSource: string;
    lastUpdatedAtApify: string;
}
