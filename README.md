# Threadconf.json

Configuration files for ThreadScript projects to regulate the behaviour of the compiler.

## Implementation of `threadconf.json` files in your projects

Create a file called `threadconf.json` at the root of your ThreadScript project and add the following content:

```json
{}
```

### Manually adding the JSON schema

To manually add the schema, add the `$schema` property to your JSON and provide the URL of the schema, for example:

```diff
{
+ "$schema": "https://raw.githubusercontent.com/ThreadScript/threadconf.json/main/schemas/[draft].json"
}
```

> The [draft] specifies the version of the ThreadScript compiler you are using.
