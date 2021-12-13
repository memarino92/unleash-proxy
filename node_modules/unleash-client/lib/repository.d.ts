/// <reference types="node" />
import { EventEmitter } from 'events';
import { Storage } from './storage';
import { FeatureInterface } from './feature';
import { CustomHeaders, CustomHeadersFunction } from './headers';
import { HttpOptions } from './http-options';
import { TagFilter } from './tags';
export declare type StorageImpl = typeof Storage;
export interface RepositoryInterface extends EventEmitter {
    getToggle(name: string): FeatureInterface;
    getToggles(): FeatureInterface[];
    stop(): void;
}
export interface RepositoryOptions {
    backupPath: string;
    url: string;
    appName: string;
    instanceId: string;
    projectName?: string;
    refreshInterval?: number;
    StorageImpl?: StorageImpl;
    timeout?: number;
    headers?: CustomHeaders;
    customHeadersFunction?: CustomHeadersFunction;
    httpOptions?: HttpOptions;
    namePrefix?: string;
    tags?: Array<TagFilter>;
}
export default class Repository extends EventEmitter implements EventEmitter {
    private timer;
    private url;
    private storage;
    private etag;
    private appName;
    private instanceId;
    private refreshInterval?;
    private headers?;
    private customHeadersFunction?;
    private timeout?;
    private stopped;
    private projectName?;
    private httpOptions?;
    private readonly namePrefix?;
    private readonly tags?;
    constructor({ backupPath, url, appName, instanceId, projectName, refreshInterval, StorageImpl, timeout, headers, customHeadersFunction, httpOptions, namePrefix, tags, }: RepositoryOptions);
    timedFetch(): void;
    validateFeature(feature: FeatureInterface): void;
    fetch(): Promise<void>;
    mergeTagsToStringArray(tags: Array<TagFilter>): Array<string>;
    stop(): void;
    getToggle(name: string): FeatureInterface;
    getToggles(): FeatureInterface[];
}
//# sourceMappingURL=repository.d.ts.map