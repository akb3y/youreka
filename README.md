# youreka

![youreka log](logo-full-white.png)

Equation systems designed for You!

## In-browser

To interact with Youreka through the web, navigate to:

```
akb3y.github.io
```


## Installation
Developers can incorporate Youreka's features through our package that is available as a Node.js module in the npm registry
Before installing, download and install the latest Node.js,

```
$ npm i youreka
```

View the website at: http://localhost:3000

## Example Usage

```
# using require
const { calculateSphereVolume } = require('youreka');

# using import
import { calculateSphereVolume } = from 'youreka';

calculateSphereVolume(1);
```
Returns

`~4.19`

## Contributing

Youreka is a community project that welcomes the continuous introduction of new science features by many contributors for years to come.

See our <a href="#">contribution guide</a> for more technical details on contributing.

### Testing

Youreka uses <a href="https://jestjs.io/docs/getting-started">Jest</a> for all of it's testing needs. Tests are required for any new code submissions.

```
npm test
```

## License
[MIT](LICENSE)
