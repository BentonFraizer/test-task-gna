import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { State, AppDispatch } from '../types/state';

// "обёртки" над встроенными хуками
//! не уверен правильно ли реализовал хук useAppDispatch
//! предыдущий вариант:
//! export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
