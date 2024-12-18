'use client'; // This is a client component

import { Provider } from 'react-redux';
import { store } from '@/app/store/store';

export default function Providers({ children }: { children: React.ReactNode }) {
    return <Provider store={store}>{children}</Provider>;
}