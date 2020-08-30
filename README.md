[![NPM Version](https://badge.fury.io/js/sql-named-params.svg)](https://badge.fury.io/js/sql-named-params)
[![CI](https://github.com/justinlettau/sql-named-params/workflows/CI/badge.svg)](https://github.com/justinlettau/sql-named-params/actions)
[![codecov](https://codecov.io/gh/justinlettau/sql-named-params/branch/master/graph/badge.svg)](https://codecov.io/gh/justinlettau/sql-named-params)
[![Dependency Status](https://david-dm.org/justinlettau/sql-named-params.svg)](https://david-dm.org/justinlettau/sql-named-params)
[![Dev Dependency Status](https://david-dm.org/justinlettau/sql-named-params/dev-status.svg)](https://david-dm.org/justinlettau/sql-named-params?type=dev)

# SQL Named Parameters

Convert SQL named parameters to placeholders and values.

# Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)

# Features

- 🚀 **Zero dependencies**, super tiny.
- 💪 Written in **TypeScript**.

# Installation

```bash
npm install --save sql-named-params
```

# Usage

```typescript
import { convert } from 'sql-named-params';

const sql = 'SELECT heros WHERE lastName = :lastName AND age <= :age';
const params = {
  lastName: 'Skywalker',
  age: 30,
};
const { query, values } = convert(sql, params);

console.log(query);
// => 'SELECT heros WHERE lastName = ? AND age <= ?'

console.log(values);
// => ['Skywalker', 30]

```

# Development

```bash
npm install
npm run build
```
