# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LocalStack <a name="LocalStack" id="@nikovirtala/projen-localstack.LocalStack"></a>

LocalStack component for projen projects.

Adds LocalStack support to your project with automatic Docker/Colima setup.

#### Initializers <a name="Initializers" id="@nikovirtala/projen-localstack.LocalStack.Initializer"></a>

```typescript
import { LocalStack } from '@nikovirtala/projen-localstack'

new LocalStack(scope: IConstruct, options?: LocalStackOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@nikovirtala/projen-localstack.LocalStack.Initializer.parameter.scope">scope</a></code> | <code>constructs.IConstruct</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-localstack.LocalStack.Initializer.parameter.options">options</a></code> | <code><a href="#@nikovirtala/projen-localstack.LocalStackOptions">LocalStackOptions</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@nikovirtala/projen-localstack.LocalStack.Initializer.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `options`<sup>Optional</sup> <a name="options" id="@nikovirtala/projen-localstack.LocalStack.Initializer.parameter.options"></a>

- *Type:* <a href="#@nikovirtala/projen-localstack.LocalStackOptions">LocalStackOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@nikovirtala/projen-localstack.LocalStack.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@nikovirtala/projen-localstack.LocalStack.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@nikovirtala/projen-localstack.LocalStack.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@nikovirtala/projen-localstack.LocalStack.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="@nikovirtala/projen-localstack.LocalStack.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@nikovirtala/projen-localstack.LocalStack.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@nikovirtala/projen-localstack.LocalStack.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@nikovirtala/projen-localstack.LocalStack.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@nikovirtala/projen-localstack.LocalStack.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@nikovirtala/projen-localstack.LocalStack.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@nikovirtala/projen-localstack.LocalStack.isConstruct"></a>

```typescript
import { LocalStack } from '@nikovirtala/projen-localstack'

LocalStack.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@nikovirtala/projen-localstack.LocalStack.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@nikovirtala/projen-localstack.LocalStack.isComponent"></a>

```typescript
import { LocalStack } from '@nikovirtala/projen-localstack'

LocalStack.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@nikovirtala/projen-localstack.LocalStack.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@nikovirtala/projen-localstack.LocalStack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@nikovirtala/projen-localstack.LocalStack.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@nikovirtala/projen-localstack.LocalStack.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@nikovirtala/projen-localstack.LocalStack.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


## Structs <a name="Structs" id="Structs"></a>

### LocalStackOptions <a name="LocalStackOptions" id="@nikovirtala/projen-localstack.LocalStackOptions"></a>

Options for LocalStack component.

#### Initializer <a name="Initializer" id="@nikovirtala/projen-localstack.LocalStackOptions.Initializer"></a>

```typescript
import { LocalStackOptions } from '@nikovirtala/projen-localstack'

const localStackOptions: LocalStackOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@nikovirtala/projen-localstack.LocalStackOptions.property.debug">debug</a></code> | <code>boolean</code> | Enable LocalStack debug mode. |
| <code><a href="#@nikovirtala/projen-localstack.LocalStackOptions.property.imageTag">imageTag</a></code> | <code>string</code> | LocalStack Docker image tag. |
| <code><a href="#@nikovirtala/projen-localstack.LocalStackOptions.property.port">port</a></code> | <code>number</code> | LocalStack gateway port. |
| <code><a href="#@nikovirtala/projen-localstack.LocalStackOptions.property.services">services</a></code> | <code>string[]</code> | LocalStack services to enable. |

---

##### `debug`<sup>Optional</sup> <a name="debug" id="@nikovirtala/projen-localstack.LocalStackOptions.property.debug"></a>

```typescript
public readonly debug: boolean;
```

- *Type:* boolean
- *Default:* false

Enable LocalStack debug mode.

---

##### `imageTag`<sup>Optional</sup> <a name="imageTag" id="@nikovirtala/projen-localstack.LocalStackOptions.property.imageTag"></a>

```typescript
public readonly imageTag: string;
```

- *Type:* string
- *Default:* "latest"

LocalStack Docker image tag.

---

##### `port`<sup>Optional</sup> <a name="port" id="@nikovirtala/projen-localstack.LocalStackOptions.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number
- *Default:* 4566

LocalStack gateway port.

---

##### `services`<sup>Optional</sup> <a name="services" id="@nikovirtala/projen-localstack.LocalStackOptions.property.services"></a>

```typescript
public readonly services: string[];
```

- *Type:* string[]
- *Default:* all services enabled

LocalStack services to enable.

---



