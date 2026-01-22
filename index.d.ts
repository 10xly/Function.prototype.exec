declare global {
  interface Function {
    /**
     * Calls the function with the specified arguments and returns the result.
     * @param args Arguments to be passed to the function.
     */
    exec<T extends (...args: any[]) => any>(
      this: T,
      ...args: Parameters<T>
    ): ReturnType<T>
  }
}

export {}
