import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { domAnimation, LazyMotion } from 'framer-motion';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<LazyMotion features={domAnimation}>
			<App />
		</LazyMotion>
	</StrictMode>
);
