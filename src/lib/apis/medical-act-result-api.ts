/* tslint:disable */
/* eslint-disable */
/**
 * Medical Records API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import globalAxios from 'axios';
import type { AxiosResponse, AxiosInstance, AxiosRequestConfig } from "axios";
import type { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import type { MedicalActResult } from '../models';
/**
 * MedicalActResultApi - axios parameter creator
 * @export
 */
export const MedicalActResultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get a list of medical act results
         * @param {number} id Medical act id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        medicalActIdResultsGet: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling medicalActIdResultsGet.');
            }
            const localVarPath = `/medical_act/{id}/results`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BearerAuth required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Create a new medical act result
         * @param {MedicalActResult} body 
         * @param {number} id Medical act id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        medicalActIdResultsPost: async (body: MedicalActResult, id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling medicalActIdResultsPost.');
            }
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling medicalActIdResultsPost.');
            }
            const localVarPath = `/medical_act/{id}/results`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BearerAuth required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            //@ts-ignore
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Delete a medical act result by ID
         * @param {number} id Medical act id
         * @param {number} resultId Medical act result id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        medicalActIdResultsResultIdDelete: async (id: number, resultId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling medicalActIdResultsResultIdDelete.');
            }
            // verify required parameter 'resultId' is not null or undefined
            if (resultId === null || resultId === undefined) {
                throw new RequiredError('resultId','Required parameter resultId was null or undefined when calling medicalActIdResultsResultIdDelete.');
            }
            const localVarPath = `/medical_act/{id}/results/{result_id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)))
                .replace(`{${"result_id"}}`, encodeURIComponent(String(resultId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BearerAuth required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get a medical results
         * @param {number} id Medical act id
         * @param {number} resultId Medical act result id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        medicalActIdResultsResultIdGet: async (id: number, resultId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling medicalActIdResultsResultIdGet.');
            }
            // verify required parameter 'resultId' is not null or undefined
            if (resultId === null || resultId === undefined) {
                throw new RequiredError('resultId','Required parameter resultId was null or undefined when calling medicalActIdResultsResultIdGet.');
            }
            const localVarPath = `/medical_act/{id}/results/{result_id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)))
                .replace(`{${"result_id"}}`, encodeURIComponent(String(resultId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BearerAuth required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Update a medical act result by ID
         * @param {MedicalActResult} body 
         * @param {number} id Medical act id
         * @param {number} resultId Medical act result id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        medicalActIdResultsResultIdPut: async (body: MedicalActResult, id: number, resultId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling medicalActIdResultsResultIdPut.');
            }
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling medicalActIdResultsResultIdPut.');
            }
            // verify required parameter 'resultId' is not null or undefined
            if (resultId === null || resultId === undefined) {
                throw new RequiredError('resultId','Required parameter resultId was null or undefined when calling medicalActIdResultsResultIdPut.');
            }
            const localVarPath = `/medical_act/{id}/results/{result_id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)))
                .replace(`{${"result_id"}}`, encodeURIComponent(String(resultId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BearerAuth required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            //@ts-ignore
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * MedicalActResultApi - functional programming interface
 * @export
 */
export const MedicalActResultApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get a list of medical act results
         * @param {number} id Medical act id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async medicalActIdResultsGet(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Array<MedicalActResult>>>> {
            const localVarAxiosArgs = await MedicalActResultApiAxiosParamCreator(configuration).medicalActIdResultsGet(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Create a new medical act result
         * @param {MedicalActResult} body 
         * @param {number} id Medical act id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async medicalActIdResultsPost(body: MedicalActResult, id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<MedicalActResult>>> {
            const localVarAxiosArgs = await MedicalActResultApiAxiosParamCreator(configuration).medicalActIdResultsPost(body, id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Delete a medical act result by ID
         * @param {number} id Medical act id
         * @param {number} resultId Medical act result id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async medicalActIdResultsResultIdDelete(id: number, resultId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await MedicalActResultApiAxiosParamCreator(configuration).medicalActIdResultsResultIdDelete(id, resultId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Get a medical results
         * @param {number} id Medical act id
         * @param {number} resultId Medical act result id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async medicalActIdResultsResultIdGet(id: number, resultId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<MedicalActResult>>> {
            const localVarAxiosArgs = await MedicalActResultApiAxiosParamCreator(configuration).medicalActIdResultsResultIdGet(id, resultId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Update a medical act result by ID
         * @param {MedicalActResult} body 
         * @param {number} id Medical act id
         * @param {number} resultId Medical act result id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async medicalActIdResultsResultIdPut(body: MedicalActResult, id: number, resultId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<MedicalActResult>>> {
            const localVarAxiosArgs = await MedicalActResultApiAxiosParamCreator(configuration).medicalActIdResultsResultIdPut(body, id, resultId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * MedicalActResultApi - factory interface
 * @export
 */
export const MedicalActResultApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Get a list of medical act results
         * @param {number} id Medical act id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async medicalActIdResultsGet(id: number, options?: AxiosRequestConfig): Promise<AxiosResponse<Array<MedicalActResult>>> {
            return MedicalActResultApiFp(configuration).medicalActIdResultsGet(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Create a new medical act result
         * @param {MedicalActResult} body 
         * @param {number} id Medical act id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async medicalActIdResultsPost(body: MedicalActResult, id: number, options?: AxiosRequestConfig): Promise<AxiosResponse<MedicalActResult>> {
            return MedicalActResultApiFp(configuration).medicalActIdResultsPost(body, id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Delete a medical act result by ID
         * @param {number} id Medical act id
         * @param {number} resultId Medical act result id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async medicalActIdResultsResultIdDelete(id: number, resultId: number, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return MedicalActResultApiFp(configuration).medicalActIdResultsResultIdDelete(id, resultId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get a medical results
         * @param {number} id Medical act id
         * @param {number} resultId Medical act result id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async medicalActIdResultsResultIdGet(id: number, resultId: number, options?: AxiosRequestConfig): Promise<AxiosResponse<MedicalActResult>> {
            return MedicalActResultApiFp(configuration).medicalActIdResultsResultIdGet(id, resultId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update a medical act result by ID
         * @param {MedicalActResult} body 
         * @param {number} id Medical act id
         * @param {number} resultId Medical act result id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async medicalActIdResultsResultIdPut(body: MedicalActResult, id: number, resultId: number, options?: AxiosRequestConfig): Promise<AxiosResponse<MedicalActResult>> {
            return MedicalActResultApiFp(configuration).medicalActIdResultsResultIdPut(body, id, resultId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * MedicalActResultApi - object-oriented interface
 * @export
 * @class MedicalActResultApi
 * @extends {BaseAPI}
 */
export class MedicalActResultApi extends BaseAPI {
    /**
     * 
     * @summary Get a list of medical act results
     * @param {number} id Medical act id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MedicalActResultApi
     */
    public async medicalActIdResultsGet(id: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<Array<MedicalActResult>>> {
        return MedicalActResultApiFp(this.configuration).medicalActIdResultsGet(id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Create a new medical act result
     * @param {MedicalActResult} body 
     * @param {number} id Medical act id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MedicalActResultApi
     */
    public async medicalActIdResultsPost(body: MedicalActResult, id: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<MedicalActResult>> {
        return MedicalActResultApiFp(this.configuration).medicalActIdResultsPost(body, id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Delete a medical act result by ID
     * @param {number} id Medical act id
     * @param {number} resultId Medical act result id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MedicalActResultApi
     */
    public async medicalActIdResultsResultIdDelete(id: number, resultId: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return MedicalActResultApiFp(this.configuration).medicalActIdResultsResultIdDelete(id, resultId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Get a medical results
     * @param {number} id Medical act id
     * @param {number} resultId Medical act result id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MedicalActResultApi
     */
    public async medicalActIdResultsResultIdGet(id: number, resultId: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<MedicalActResult>> {
        return MedicalActResultApiFp(this.configuration).medicalActIdResultsResultIdGet(id, resultId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Update a medical act result by ID
     * @param {MedicalActResult} body 
     * @param {number} id Medical act id
     * @param {number} resultId Medical act result id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MedicalActResultApi
     */
    public async medicalActIdResultsResultIdPut(body: MedicalActResult, id: number, resultId: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<MedicalActResult>> {
        return MedicalActResultApiFp(this.configuration).medicalActIdResultsResultIdPut(body, id, resultId, options).then((request) => request(this.axios, this.basePath));
    }
}