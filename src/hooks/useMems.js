import { useQuery } from '@tanstack/react-query';
import { useCallback } from 'react';
import { MEMS_URL } from './consts';
import { queryKeys } from '../react-query/consts';
import { filterMems } from './utils';

async function getMems() {
    const data = await fetch(MEMS_URL);
    return data.json();
}

export const useMems = (type) => {
    const fallback = [];
    const selectFn = useCallback((data) => filterMems(data, type), [type]);

    const { data = fallback } = useQuery([queryKeys.mems], getMems, { select: selectFn });
    return data;
}
