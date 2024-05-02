/*
 * Copyright 2020 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
export { TechdocsGenerator } from './techdocs';
export { Generators } from './generators';
export { getMkdocsYml } from './helpers';
export type {
  RunContainerOptions,
  ContainerRunner,
  GeneratorBase,
  GeneratorOptions,
  GeneratorBuilder,
  GeneratorRunOptions,
  SupportedGeneratorKey,
} from './types';
import { getMkdocsYml } from './helpers';
/**
 * @public
 * @deprecated
 * Deprecated in favor of getMkdocsYml (lowercase 'd')
 */
export const getMkDocsYml = getMkdocsYml;
