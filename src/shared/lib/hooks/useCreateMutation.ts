import {Equal, useUnit} from 'effector-react';
import {combine, Effect, restore, Store} from 'effector';
import {ApiError} from '../../api';

export interface IStoreStatus<Res, Err> {
    isLoading: boolean;
    error: Err | null;
    data: Res | null;
}

export const useCreateMutation = <Req, Res, Err extends Error | ApiError = ApiError>(
    effect: Effect<Req, Res, Err>,
): [Equal<Req, void> extends true ? () => Promise<Res> : (payload: Req) => Promise<Res>, IStoreStatus<Res, Err>] => {
    const $storeStatus = combine({
        isLoading: effect.pending,
        error: restore<Err>(effect.failData, null),
        data: restore<Res>(effect.doneData, null),
    });

    return useUnit<[Effect<Req, Res, any>, Store<IStoreStatus<Res, Err>>]>([effect, $storeStatus]);
};
