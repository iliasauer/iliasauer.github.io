export default class Util {

  static transform(paths) {
    if (paths === null) return null;
    const result = [];
    for (const i in paths) {
      if (+i === paths.length - 1) {
        return result;
      }
      result.push({ source: paths[+i], target: paths[+i + 1] });
    }
  }

  static collectSinkPaths(patients) {
    const result = {};
    for (const i in patients) {
      const paths = patients[i].path;
      const transformedPaths = Util.transform(paths);
      const sink = paths[paths.length - 1];
      Util.collectSinks(result, sink, transformedPaths);
    }
    return result;
  }

  static collectSinks(result, sink, transformedPaths) {
    if (sink in result) {
      const sinkPaths = result[sink];
      for (const j in transformedPaths) {
        let existed = false;
        const transformedPath = transformedPaths[j];
        for (const k in sinkPaths) {
          if (transformedPath.source === sinkPaths[k].source && transformedPath.target === sinkPaths[k].target) {
            existed = true;
            break;
          }
        }
        if (!existed) {
          result[sink].push(transformedPath);
        }
      }
    } else {
      result[sink] = transformedPaths;
    }
  }

  static isSink(id) {
    if (id === 'h' || id === 'c' || id === 't' || id === 'd' || id === 'w' || id === 'u') {
      return true;
    }
    return false;
  }

  static orderNodes(data) {
    const order = Object.keys(data).filter(d => !Util.isSink(d.substring(0, 1)));
    order.sort((a, b) => {
      const letterA = a.substring(0, 1);
      const letterB = b.substring(0, 1);
      if (Util.isSink(letterA)) {
        return 1;
      }
      if (Util.isSink(letterB)) {
        return -1;
      }
      return a.substring(1, 3).localeCompare(b.substring(1, 3));
    });
    return order;
  }

  static collectShortNames(graph) {
    const shortNames = [];
    for (const key in graph) {
      const el = graph[key].short_name;
      if (shortNames.indexOf(el) === -1 && !Util.isSink(key.substring(0, 1))) {
        shortNames.push(el);
      }
    }
    return shortNames;
  }


  static isPathSelected(paths, data) {
    for (const i in paths) {
      const patientPath = paths[i];
      if (patientPath.source === data.source.id && patientPath.target === data.target.id) {
        return true;
      }
    }
    return false;
  }
}
