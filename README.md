# NX

## NX monorepo management

### NX is enabled to do the following:

- Monorepo management in conjuction with yarn Workspaces
- Cache build, test and terminal outputs
- After first build, if no further changes, it would pull from the local cache
- Once build and test outputs are cached, further `build:all` would trigger only changed projects build script. Rest will be pulled from cache.
- If there are inter-dependent projects, then they also would be build with the dependency tree.
- Same case with test as well, with command `test:all`.
- We could trigger `build:since` to run builds on changes after the last commit on the remote configurable base branch
  - Defaulted to `main`, can be configured in file `nx.json` as shown below.
    ```json
    "affected": {
        "defaultBase": "main"
      }
    ```
- With nx, the builds/tests/others are propagated to all the yarn workspaces automatically, via the build scripts as defined in respective `package.json` files, no more using `scripts` directory. It would take the current configuration as is and start working with no modifications.
- [NX daemon](https://nx.dev/guides/nx-daemon) is enabled by default which will start the file watcher on the root workspace, once any command is executed and it helps with faster computational hash graph calculations.
- Builds can be configured to run parallely, with default being 3, in `nx.json` file.

  ```json
  "tasksRunnerOptions": {
    "default": {
      "runner": "nx/tasks-runners/default",
      "options": {
        "cacheableOperations": [
          "build",
          "test"
        ],
        "parallel": 5,
        "useDaemonProcess": true
      }
    }
  }
  ```

### NX commands in conjuction with yarn

[ref](https://nx.dev/using-nx/nx-cli)

```sh
# build all workspaces
yarn build:all
```

```sh
# build specific workspace
yarn build:package1
```

```sh
# build workspaces changed since last commit to the predefined branch
yarn build:since
```

```sh
# test all workspaces
yarn test:all
```

```sh
# test specific workspace
yarn test:package1
```

```sh
# test workspaces changed since last commit to the predefined branch
yarn test:since
```

```sh
# clean all workspaces
yarn clean:all
```

```sh
# reset nx cache and shots down the daemon, if configured(default: true)
nx reset
```

```sh
# shows the nx dependency graph, in browser
nx graph
```
