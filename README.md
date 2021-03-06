<img alt="logo" src="./assets/logo.png"/> 

---

# build-stats

> Get the stats of your pipeline.

![preview](https://raw.githubusercontent.com/ajaymathur/build-stats/master/assets/preview.png)

## Install

```sh
yarn global add build-stats
```

## Example

Download pipelines builds history to `.data` folder:

```sh
build-stats travis:boltpkg/bolt download
```

Calculate monthly average build time and success rate of a repo over the last year:

```sh
build-stats travis:boltpkg/bolt calculate
```

Calculate daily average build time and success rate of a repo over the last month:

```sh
build-stats travis:boltpkg/bolt calculate --period 1 --last 30
```

Calculate daily average build time and success rate of the master branch of a repo over the last 90 days:

```sh
$ build-stats travis:boltpkg/bolt calculate --branch master --period 1 --last 90
```

## Usage

```sh
build-stats <service>:<user>/<repo> <command> [...options]
```

- `service`: CI Service (`travis` or `bitbucket`)
- `user/repo`: Project specifier (Example: `https://travis-ci.org/boltpkg/bolt` &rarr; `boltpkg/bolt`)

### Commands

#### `download`

Download the build history into a local `.data` cache.

#### `calculate`

Calculate the mean and see the stats of build history

- `--period <days>`: How many days in a time period to calculate the build stats for (**Default: 1**)
- `--last <days>`: How many periods to calculate back to (**Default: 30**)

