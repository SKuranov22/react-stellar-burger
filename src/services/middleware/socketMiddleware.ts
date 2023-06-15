import { AppDispatch, RootState } from "../../types";
import { MiddlewareAPI } from "@reduxjs/toolkit";
import { Middleware } from "redux";
import { getCookie } from "../../utils/cooke";

type TWsActions = {
  wsStart: string,
  onOpen: string,
  onClose: string,
  onError: string,
  getOrders: string
}

export const socketMiddleware = (wsUrl: string, wsActions: TWsActions, auth: boolean): Middleware<{}, RootState> => {
  return (store) => {
    let socket: WebSocket | null = null;

    return next => action => {
      const { dispatch } = store;
      const { type, payload } = action;
      const { wsStart, onOpen, onClose, onError, getOrders } = wsActions;

      const accessToken = getCookie('accessToken');
      if (type === wsStart && auth === false) {
        socket = new WebSocket(wsUrl);
      } else if (type === wsStart && auth === true && accessToken) {
        const accessToken = getCookie("accessToken");
        socket = new WebSocket(
          `${wsUrl}?token=${accessToken}`
        );
      }

      if (socket) {
        // функция, которая вызывается при открытии сокета
        socket.onopen = (event: Event) => {
          dispatch({ type: onOpen, payload: event });
        };

        // функция, которая вызывается при ошибке соединения
        socket.onerror = (event: Event) => {
          dispatch({ type: onError, payload: event });
        };

        // функция, которая вызывается при получении события от сервера
        socket.onmessage = (event: MessageEvent<any>) => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          const { success, ...restParsedData } = parsedData;
          dispatch({ type: getOrders, payload: restParsedData });
        };
        // функция, которая вызывается при закрытии соединения
        socket.onclose = (event: CloseEvent) => {
          dispatch({ type: onClose, payload: event });
        };
      }
      next(action);
    };
  };
}; 
