# types-auto

`types-auto` is a module that automatically installs TypeScript type declarations for your project's dependencies. It simplifies the process of managing type declarations, making your TypeScript development experience smoother and more efficient.

## Installation

You can install `types-auto` globally for use in any project:

```bash
npm install -g types-auto
```

Or you can install it as a devDependency in your specific project:

```bash
npm install --save-dev types-auto
```

## Usage

Once installed, you can run `types-auto` in your project directory:

```bash
npx types-auto
```

This will scan your `package.json` for dependencies and devDependencies, and automatically install the corresponding `@types` packages for those libraries (if they exist).

You can also configure `types-auto` to run automatically after every `npm install`. To do this, add a `postinstall` script to your `package.json` file:

```json
"scripts": {
  "postinstall": "types-auto"
}
```

With this configuration, `types-auto` will run every time you run `npm install`.

## Building

If you want to build the types-auto project from source, you can follow these steps:

1. Clone the repository:
```bash
git clone https://github.com/pp00x/types-auto.git
```
2. Navigate into the project directory:
```bash
cd types-auto
```
3. Install the dependencies:
```bash
npm install
```
4. Build the project:
```bash
npm run build
```

This will transpile the TypeScript code to JavaScript and output it in the dist/ directory.

## Contributing

Contributions are welcome! Please open an issue if you encounter a bug or have a feature request, or open a pull request if you want to contribute code.

## License

Apache-2.0