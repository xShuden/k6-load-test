// Creator: k6 Browser Recorder 0.2.0

import { sleep, group } from "k6";
import http from "k6/http";

export const options = { vus: 50, duration: "5m" };

export default function main() {
  let response;

  group(
    "page_1 - https://furkansayim.me/saml-ile-single-sign-on.html",
    function () {
      response = http.get(
        "https://furkansayim.me/saml-ile-single-sign-on.html",
        {
          headers: {
            Host: "furkansayim.me",
            Accept:
              "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
            "Accept-Language": "tr-TR,tr;q=0.8,en-US;q=0.5,en;q=0.3",
            "Accept-Encoding": "gzip, deflate, br",
            Connection: "keep-alive",
            "Upgrade-Insecure-Requests": "1",
          },
        }
      );
    }
  );

  group("page_2 - https://furkansayim.me/almanca", function () {
    response = http.get("https://furkansayim.me/almanca", {
      headers: {
        Host: "furkansayim.me",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        "Accept-Language": "tr-TR,tr;q=0.8,en-US;q=0.5,en;q=0.3",
        "Accept-Encoding": "gzip, deflate, br",
        Connection: "keep-alive",
        "Upgrade-Insecure-Requests": "1",
      },
    });
  });

  group("page_3 - https://furkansayim.me/", function () {
    response = http.get("https://furkansayim.me/", {
      headers: {
        Host: "furkansayim.me",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        "Accept-Language": "tr-TR,tr;q=0.8,en-US;q=0.5,en;q=0.3",
        "Accept-Encoding": "gzip, deflate, br",
        Connection: "keep-alive",
        "Upgrade-Insecure-Requests": "1",
      },
    });
  });

  group(
    "page_4 - https://furkansayim.me/osquery-ile-malware-analizi.html",
    function () {
      response = http.get(
        "https://furkansayim.me/osquery-ile-malware-analizi.html",
        {
          headers: {
            Host: "furkansayim.me",
            Accept:
              "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
            "Accept-Language": "tr-TR,tr;q=0.8,en-US;q=0.5,en;q=0.3",
            "Accept-Encoding": "gzip, deflate, br",
            Connection: "keep-alive",
            "Upgrade-Insecure-Requests": "1",
          },
        }
      );
    }
  );

  // Automatically added sleep
  sleep(1);
}