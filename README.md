# BACKEND-DOMINATION
## NOTES - TIME, TIDE & JAVASCRIPT WAIT FOR NONE
#
# Day 1: JavaScript

### Topics Covered:
- Primitives and References

### Key Points:
- `()` `{}` `[]` - These are references.
- Remaining data types are primitives.

### Reference:
- Refer to `Day_1 script.js` for examples and code.

# Day 2

## JavaScript Modules

### CommonJS (CJS)
- **Export:** `module.exports` or `exports` is used to export data.
- **Import:** `require` is used to import data.

### ECMAScript Modules (ESM)
- **Export:** `export` is used to export data.
- **Import:** `import` is used to import data.

### Import & Export in CJS
Refer to `Day_2/cjs_import_export` for examples.

- **For Single Data Export:**
    ```javascript
    module.exports = a;
    ```

- **For Multiple Data Export:**
    ```javascript
    module.exports = { a, b };
    ```

    ```javascript
    module.exports.a = a;
    module.exports.b = b;
    ```

    ```javascript
    exports.a = 11;
    exports.b = 2005;
    ```

---

## Understanding How the Internet Works

### Overview
When a laptop or computer connects to the Internet, data is transmitted in the form of **radio waves** through the air to the nearest **tower (ISP)**. Here, it is converted into an electrical signal, passed through underground cables to the ISP, which then checks the request or data. The data is sent to the server and then delivered to the requested user.

### Key Components:

- **IP Address:**
  - Assigned to a device by **DHCP (Dynamic Host Configuration Protocol)** provided by the **ISP (Internet Service Provider)**.
  - Two versions:
    - **IPv4** (e.g., `66.94.29.13`)
    - **IPv6** (e.g., `2001:0000:3238:DDE1:0063:0000:0000:FEFB`) - This version has a large address space, capable of generating 3.4x10^38 addresses.

- **MAC Address:**
  - A unique **physical address** for every device in a local area network.

- **Proxy:**
  - A server used on the client side to access websites indirectly, allowing restricted sites to be accessed by rerouting through a third-party server.
  - Example: Accessing `Sheryians.com` using `Microsoft proxy`.

- **VPN (Virtual Private Network):**
  - Similar to a proxy, but with encrypted data, so the ISP cannot track it.

- **Server:**
  - Any computer or device programmed and connected to the Internet that can **accept requests** and **send responses**.

- **Reverse Proxy:**
  - Sits on the **server side**, inspecting incoming data/requests to filter out malicious content before sending it to the main server. Commonly used for **rate limiting** and to prevent **DDoS attacks**.

- **Protocols:**
  - Defined rules that ensure consistent functioning across all browsers, whether for downloading or other specific tasks.

- **ISP (Internet Service Provider):**
  - The telecom company providing Internet services.

- **TCP/IP Protocol:**
  - **TCP (Transmission Control Protocol):** Ensures data packets are sent and provides acknowledgment upon successful transmission.
  - **IP (Internet Protocol):** Responsible for delivering packets to the correct address.

- **UDP (User Datagram Protocol):**
  - Used for fast data transmission without verification. Common in streaming platforms where speed is prioritized over delivery confirmation.

- **HTTP/HTTPS:**
  - **HTTP** (Hypertext Transfer Protocol) has three versions:
      - **v1** – Slower, similar to 2G service.
      - **v2** – Moderate, akin to 3G/4G service.
      - **v3** – Very fast, comparable to 5G/6G service.
  - **HTTPS** adds a security layer over HTTP.

---

## Node.js

- **Node.js** is a JavaScript runtime environment allowing JavaScript to be run outside the browser.
- It is **non-blocking I/O** and **asynchronous**, enabling code to execute without waiting for previous code blocks to finish.
- Built on Chrome’s **V8 JavaScript Engine** and developed by **Ryan Dahl**, who modified the V8 to create Node.js.

### Key Features

- **libuv** 🐲: Enables Node.js to perform asynchronous tasks consistently across different platforms.
- **Single-threaded nature**: Node.js operates on a single thread, making it less suited for heavy CPU tasks.
- **Single Threading:** A thread serves as the intermediary, handling tasks between the user and the server.
