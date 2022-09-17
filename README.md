## Setup

### Requirements

- NodeJS
- dotnet

### How to launch

1. Clone repo
1. Go to the ClientApp folder
1. Run
   ```bash
    npm install
   ```
1. Come back to the main folder
1. Run
   ```bash
   dotnet run
   ```

### How to deal with secrets

To add a secret run where `<SECRET>` is the name of the secret and `<VALUE>` is the actual value

```bash
dotnet user-secrets set "<SECRET>" "<VALUE>"
```

If you want to check the secrets you've already set you can run

```bash
dotnet user-secrets list
```
