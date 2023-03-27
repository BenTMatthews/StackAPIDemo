using System.Net;
using System.Text.Json;
using System.Text.Json.Serialization;

public class StackExchangeUser
{
    [JsonPropertyName("account_id")]
    public int AccountId { get; set; }

    [JsonPropertyName("display_name")]
    public string DisplayName { get; set; }

    [JsonPropertyName("profile_image")]
    public string ProfileImage { get; set; }

    [JsonPropertyName("reputation")]
    public int Reputation { get; set; }
}

public class StackExchangeResponse<T>
{
    public List<T> Items { get; set; }
    public bool HasMore { get; set; }
    public int QuotaMax { get; set; }
    public int QuotaRemaining { get; set; }
}

public class Program
{
    static async Task Main(string[] args)
    {
        var httpClientHandler = new HttpClientHandler { AutomaticDecompression = DecompressionMethods.All };

        // Set up the HttpClient and API endpoint URL
        var client = new HttpClient(httpClientHandler);
        var apiUrl = "https://api.stackexchange.com/2.3/users?order=desc&sort=reputation&site=stackoverflow";

        // Call the API and deserialize the response into C# objects
        var options = new JsonSerializerOptions { PropertyNameCaseInsensitive = true };
        var response = await client.GetStringAsync(apiUrl);
        var usersResponse = JsonSerializer.Deserialize<StackExchangeResponse<StackExchangeUser>>(response, options);

        // Output the first user's display name and reputation
        var firstUser = usersResponse?.Items[0];
        Console.WriteLine($"User: {firstUser?.DisplayName}, Reputation: {firstUser?.Reputation}");
    }
}